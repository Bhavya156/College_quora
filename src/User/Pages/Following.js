import React from "react";
import Following1 from "./Following1";




function Following() {
      
  
  return (
    <div class="grid place-content-center bg-orange-100 pt-5">
      
        <Following1
          id= "1"
          username="Bhavya"
          caption="What is Cascading Rollback? Explain using this example."
          imageUrl="https://www.gatevidyalay.com/wp-content/uploads/2018/06/Cascading-Schedule-Cascading-Rollback-Cascading-Abort-1.png"
          
          />
          
      
        <Following1
          id="2"
          username="Shreyans"
          caption="What is Binary Search Tree? Explain using this example."
          imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Binary_search_tree.svg/1200px-Binary_search_tree.svg.png"
        />
        
    
        <Following1
          id="3"
          username="Esha"
          caption="What is Deadlock? Is there any conflict serializability in the above problem?"
          imageUrl="https://media.geeksforgeeks.org/wp-content/cdn-uploads/deadlock.png"
        />
        
    </div>
  );
}

export default Following;
