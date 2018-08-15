let template = require('babel-template');
let tryCatchWrapper = template(`{
    try{
        BODY
    }catch(ERR){
        console.log(ERR);
    }
}`)

function plugin({ types: t }) {
    return {
        visitor: {
            Function(path) {
                //try/catch 包裹
                let errorVariableName = path.scope.generateUidIdentifier('e')
                path.get('body').replaceWith(tryCatchWrapper({
                    BODY: path.node.body.body,
                    ERR: errorVariableName
                }));
            }
        }
    }
}
module.exports = plugin;
