import Specification from "./components/Specification";
import UnitOfMeasurement from "./components/UnitOfMeasurement";
import UnitConversion from "./components/UnitConversion";
import ModuleUnit from "./components/ModuleUnit";
import ShiftWork from "./components/ShiftWork";
import Logout from "./components/auth/Logout";

export const routes = [
    { path: '/', component: Specification ,name:'home'},
    { path: '/unit', component: UnitOfMeasurement ,name:'unit'},
    { path: '/moduleUnit', component: ModuleUnit ,name:'moduleUnit'},
    { path: '/unitConversion', component: UnitConversion ,name:'unitConversion'},
    { path: '/shiftWork', component: ShiftWork ,name:'shiftWork'},
    { path: '/home', component: Specification,name: 'home' },

];
