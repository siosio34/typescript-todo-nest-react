const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
   style: true,
  }),
 addLessLoader({
   javascriptEnabled: true,
       modifyVars: { 
        "@primary-color": "#6252cd",                       
        "@link-color": "#1890ff",                           
        "@success-color": "#52c41a",                         
        "@warning-color": "#faad14",                         
        "@error-color": "#f5222d",                           
        "@font-size-base": "14px",                           
        "@heading-color": "rgba(0, 0, 0, .85)",              
        "@text-color": "rgba(0, 0, 0, .65)",                 
        "@text-color-secondary" : "rgba(0, 0, 0, .45)",      
        "@disabled-color" : "rgba(0, 0, 0, .25)",            
        "@border-radius-base": "4px",                        
        "@border-color-base": "#d9d9d9",                     
        "@box-shadow-base": "0 2px 8px rgba(0, 0, 0, .15)",  
    },
 }),
 );

/*@primary-color: #1890ff;                         // primary color for all components*/
/*@link-color: #1890ff;                            // link color*/
/*@success-color: #52c41a;                         // success state color*/
/*@warning-color: #faad14;                         // warning state color*/
/*@error-color: #f5222d;                           // error state color*/
/*@font-size-base: 14px;                           // major text font size*/
/*@heading-color: rgba(0, 0, 0, .85);              // heading text color*/
/*@text-color: rgba(0, 0, 0, .65);                 // major text color*/
/*@text-color-secondary : rgba(0, 0, 0, .45);      // secondary text color*/
/*@disabled-color : rgba(0, 0, 0, .25);            // disable state color*/
/*@border-radius-base: 4px;                        // major border radius*/
/*@border-color-base: #d9d9d9;                     // major border color*/
/*@box-shadow-base: 0 2px 8px rgba(0, 0, 0, .15);  // major shadow for layers*/
