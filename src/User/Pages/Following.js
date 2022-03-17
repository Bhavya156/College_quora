import React from "react";
import Following1 from "./Following1";

function Following() {
  return (
    <div class="grid place-content-center">
      
        <Following1
          username="Bhavya"
          caption="Welcome to Pandora"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOMzg-53qIbQcn7PuqLtnA9jWHpNVBxEmeag&usqp=CAU"
        />
        
      
        <Following1
          username="Shreyans"
          caption="Dope"
          imageUrl="https://media.istockphoto.com/photos/samoyed-dog-picture-id181956647?b=1&k=20&m=181956647&s=170667a&w=0&h=XQcaTuaNeJJDHgG1XWsJ8bOrF2L42kqnhjgw7q1_V90="
        />
        
    
        <Following1
          username="Esha"
          caption="That was fun"
          imageUrl="https://s36700.pcdn.co/wp-content/uploads/2019/11/Golden-Puppy_getty82781924-399x600.png"
        />
        
    </div>
  );
}

export default Following;
