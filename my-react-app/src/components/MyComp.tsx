import React from "react";
function MyComp(){
    throw new Error('Oops!Something went wrong');
    return <div>Hello World</div>;
}
export default MyComp;