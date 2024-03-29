/* This program is free software: you can redistribute it and/or
   modify it under the terms of the GNU Lesser General Public License
   as published by the Free Software Foundation, either version 3 of
   the License, or (at your option) any later version.
   
   This program is distributed in the hope that it will be useful,
   but WITHOUT ANY WARRANTY; without even the implied warranty of
   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
   GNU General Public License for more details.
   
   You should have received a copy of the GNU General Public License
   along with this program.  If not, see <http://www.gnu.org/licenses/>. 
*/

otp.namespace("otp.core");

otp.core.Webapp = {

    map     : null,
    
    modules : [ ],
    activeModule : null,
    
    initialize : function(config) {
        otp.configure(this, config);
        
        this.map = new otp.core.Map();        
        
        this.addModule(new otp.modules.bikeshare.BikeShareModule({'webapp': this}), true);
    },
    
    addModule : function(module, makeActive) {
        makeActive = typeof makeActive !== 'undefined' ? makeActive : false;
        this.modules.push(module);
        if(makeActive) {
            this.setActiveModule(module);
        }
    },
    
    setActiveModule : function(module) {
        console.log("set active module: "+module.moduleName);
        this.map.activeModuleChanged(module);
    },    
        
    CLASS_NAME : "otp.core.Webapp"
}


otp.core.Webapp = new otp.Class(otp.core.Webapp);
