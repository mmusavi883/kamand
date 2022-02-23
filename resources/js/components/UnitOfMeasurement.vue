<template>
    <div class="col-lg">
        <section class="content-header">
            <h1 class="m-header">
                تبدیل واحد های اندازه گیری
            </h1>

        </section>
        <div class="box">
            <div class="box-header with-border">
                <div class="row">
                    <p class="col-sm-7" style="font-size: 14px">در این بخش می توانید یک یا چند واحد اضافه نمایید.</p>
                    <p class="col-sm-5" style="direction: ltr">
                        <i class="fa fa-fw fa-angle-up"></i>بستن</p>
                </div>
            </div>
            <div class="box-body">
                <div class="col-lg-12">
                    <div class="col-sm-2">
                        <small data-v-1b46a5e9="" class="text-dark">عنوان</small>
                        <input type="text" class="form-control" placeholder="عنوان"
                               v-model="form.title">
                    </div>
                    <div class="col-sm-2">
                        <small data-v-1b46a5e9="" class="text-dark">کد</small>
                        <input type="text" class="form-control" placeholder="کد"
                               v-model="form.code">
                    </div>
                    <div class="col-sm-2">
                        <small data-v-1b46a5e9="" class="text-dark">نوع</small>
                        <select class="form-control select2" style="width: 100%;"
                                v-model="form.type">
                            <option v-for="item in types" :key="item.id" :value="item.id">{{item.name}}</option>

                        </select>
                    </div>
                    <div class="col-sm-2">
                        <small data-v-1b46a5e9="" class="text-dark">تگ</small>
                        <select class="form-control select2" style="width: 100%;"
                                v-model="form.tag">
                            <option v-for="item in tags" :key="item.id" :value="item.id">{{item.name}}</option>
                        </select>
                    </div>
                    <div class="col-sm-2">
                        <small data-v-1b46a5e9="" class="text-dark">دسته بندی</small>
                        <select class="form-control select2" style="width: 100%;"
                                v-model="form.category">
                            <option v-for="item in cats" :key="item.id" :value="item.id">{{item.name}}</option>
                        </select>
                    </div>
                    <div class="col-sm-1">

                        <button type="button" class="btn btn-secondary"
                                :disabled="!isComplete"
                                :style="getColor"
                                @click="saveForm">ذخیره
                        </button>
                    </div>
                </div>
            </div>
            <!-- /.box-body -->
        </div>
        <hr>
        <section class="content-header">
            <h1 class="m-header">
                مدیریت تبدیل واحد های اندازه گیری
            </h1>

        </section>
        <div class="box">
            <div class="box-header with-border">
                <div class="row">
                </div>
            </div>
            <div class="box-body">
                <div class="col-lg-12">
                    <table class="table">
                        <thead>
                        <tr>
                            <th scope="col">ردیف</th>
                            <th scope="col"><input type="text" class="form-control" placeholder="عنوان"></th>
                            <th scope="col"><input type="text" class="form-control" placeholder="کد"></th>
                            <th scope="col"><input type="text" class="form-control" placeholder="نوع"></th>
                            <th scope="col"><input type="text" class="form-control" placeholder="تگ"></th>
                            <th scope="col"><input type="text" class="form-control" placeholder="دسته بندی"></th>
                            <i class="fa fa-lg fa-filter"
                               style="background: #c4c4c4;margin-top: 8px;padding: 8px;color: white"></i>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(item,index) in specifications" :key="item.code"
                            v-on:mouseover="getCursor">
                            <th scope="row">{{index+1}}</th>
                            <td>{{item.title}}</td>
                            <td>{{item.code}}</td>
                            <td>{{item.type}}</td>
                            <td>{{item.tag}}</td>
                            <td>{{item.category}}</td>
                            <td>
                                <div class="row">
                                    <div class="col-sm-1"><i class="fa fa-lg fa-edit"></i></div>
                                    <div class="col-sm-1"><i class="fa fa-lg fa-trash"></i></div>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <!-- /.box-body -->
        </div>
    </div>
</template>

<script>
import vueMultiSelect from 'vue-multi-select';
import 'vue-multi-select/dist/lib/vue-multi-select.css';

export default {
    data() {
        return {
            cats: [
                {id: 1, name: 'cat1'},
                {id: 2, name: 'cat2'},
                {id: 3, name: 'cat3'},
            ],
            types: [
                {id: 1, name: 'type1'},
                {id: 2, name: 'type2'},
                {id: 3, name: 'type3'},
            ],
            tags: [
                {id: 1, name: 'tag1'},
                {id: 2, name: 'tag2'},
                {id: 3, name: 'tag3'},
            ],
            form: {
                title: null,
                code: null,
                type: null,
                tag: null,
                category: null
            }
            ,
            errors: {},
            specifications: [
                {
                    title: 'عنوان اول',
                    code: 'کد اول',
                    type: 'نوع اول',
                    tag: 'تگ اول',
                    category: 'دسته بندی اول'
                }
            ]
        }
    }
    , components: {
        vueMultiSelect
    }
    , methods: {
        more() {
            this.moreItem ? this.moreItem = false : this.moreItem = true;
        }, saveForm() {
            this.specifications.push(this.form);
            console.log(this.form);
        },
        deleteForm(){
            this.form.type = null;
            this.form.code = null;
            this.form.category = null;
            this.form.title = null;
            this.form.tag = null;

        },getCursor(){

        }
    }, computed: {
        isComplete() {
            return this.form.title && this.form.code && this.form.tag && this.form.category && this.form.type
        }, getColor() {
            let color = '#fff';
            let marginTop = '18px';
            let backgroundColor = 'c4c4c4';
            if (this.isComplete) {
                backgroundColor = '#089562';
            } else {
                backgroundColor = '#c4c4c4';
            }
            return {color, backgroundColor, marginTop};
        }
    }
}
</script>

<style scoped>
.form-control {
    border-radius: 6px;
}


</style>
