	var symbol="X";
	var c=0;
	
	 function Symbol(cell)
	 {   
			if (cell.value !== "     ")
                {
						alert("already clicked");
                      c--;
				}
		else{
				
					 
					   cell.value = symbol;
					   changeSymbol();
					   checkCondition();
			}	
			 c++;
			
			Tie(c);
			
	}  
	
	 function checkCondition()
       {
				if(winningCondition())
				 {
					 print("Congratulations... "+symbol+" Won....! Restart the Game");
					 //reset();
					
				 }
				
	   } 
	   
	 function changeSymbol()
		   {
			    if(symbol === "X")
					   {      
				               if(!winningCondition())
								    symbol="O";
								
					   }	
				else 
					   {   
					           if(symbol==="O")
					               {
						            if(!winningCondition())
										 symbol="X";
									 
						           }
					   }
		   }	

	function Tie(c)
		{
			if(c<9)
				{
					checkCondition();
				}
			else{
					print("DRAW...Restart The Game");
				
				}
	   
		}   
		
		
	function reset()
		  { 
		  
			    restart();
				c=0;	
				symbol="X";
				document.f1.b00.value="     ";
				document.f1.b01.value="     ";
				document.f1.b02.value="     ";
				document.f1.b10.value="     ";
				document.f1.b11.value="     ";
				document.f1.b12.value="     ";
				document.f1.b20.value="     ";
				document.f1.b21.value="     ";
				document.f1.b22.value="     ";
				cell.value="    ";
				
				
				
		  }
		  
	function winningCondition()
           {
             if(document.f1.b00.value==symbol && document.f1.b01.value==symbol && document.f1.b02.value==symbol)
               return true;
            else if(document.f1.b10.value==symbol && document.f1.b11.value==symbol && document.f1.b12.value==symbol)
               return true;
            else if(document.f1.b20.value==symbol && document.f1.b21.value==symbol && document.f1.b22.value==symbol)
               return true;
            else if(document.f1.b00.value==symbol && document.f1.b10.value==symbol && document.f1.b20.value==symbol)
               return true;
            else if(document.f1.b01.value==symbol && document.f1.b11.value==symbol && document.f1.b21.value==symbol)
              return true;
            else if(document.f1.b02.value==symbol && document.f1.b12.value==symbol && document.f1.b22.value==symbol)
              return true;
            else if(document.f1.b00.value==symbol && document.f1.b11.value==symbol && document.f1.b22.value==symbol)
             return true;
            else if(document.f1.b02.value==symbol && document.f1.b11.value==symbol && document.f1.b20.value==symbol)
             return true;
    	    else
			 return false;
		}
		   
		   
	function print(m)
	{
		document.getElementById("msg").innerText=m;
	

	}	
	
	function restart()
	{
		document.getElementById("msg").innerText=" ";
	}
	
						
							 

		
        
		
		
       
		
		
    
								   
				
					   
					   
					       
					          
								   
							
							
							
					    
				  
		   

    						   
					   
				     
		   
				
			
				      
		    
				

				
				 
				 
			
				
				
				
				
				
				  
				 
			
		  
		  
		  
		   		   
							
		

  		
		 
   				
					
   
         
	
	   
          

 