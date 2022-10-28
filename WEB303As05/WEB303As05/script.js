/*
    Assignment 05
*/

$(document).ready(function () {
    class ContentItem{
        uniqueId;
         name;
        description;
        category;
    
    constructor(uniqueId, name, description, category){
            this.uniqueId = uniqueId;
            this.name = name;
            this.description = description;
            this.category = category;
            }
    
    updateContentItem(uniqueId, name, description, category){
            if(this.uniqueId == uniqueId && name && description && category){
                this.uniqueId = uniqueId;
                this.name = name;
                this.description = description;
                this.category = category;
                }
    
            }
            toString(){
                return $('#content-item-list').append(`<div class="content-item-wrapper">
                <div id="content-item-${this.uniqueId}">
                <h2 class="name">${this.name}</h2>
                <p class="description">${this.description}</p>
                <div class="category">${this.category}</div>
                </div>
                 </div>`);
                    }
            }
            
            let content = [
            {
                "uniqueId": 0,
                "name": "Parth Patel",
                "description": "Full Stack Web Developer",
                "category": "Employee"
            },
            {
                "uniqueId": 1,
                "name": "Dhruvesh Patel",
                "description": "Accountant",
                "category": "Employee"
            },
            {
                "uniqueId": 2,
                "name": "Dhruv Vandra",
                "description": "Lawyer",
                "category": "Lawyer"
            },
             {
                "uniqueId": 4,
                "name": "Jay  Patel",
                "description": "Event Manager",
                "category": "Manager"
            }
        
            ];
        
            $.each(content, function(key, val){
              $('#content-item-list').append(`<div class="content-item-wrapper">
                <div id="content-item-${this.uniqueId}">
                <h2 class="name">${this.name}</h2>
                <p class="description">${this.description}</p>
                <div class="category">${this.category}</div>
                </div>
            </div>`);
            });


           
            $('.content-item-wrapper').css('margin', 'auto');  
            $('.content-item-wrapper').css('marging-top', '35px');
            $('.content-item-wrapper').css('border', 'dotted 8px black');
            $('.content-item-wrapper').css('width', '35%');
            $('.content-item-wrapper').css('padding', '25px');
            $('.content-item-wrapper').css('margin-bottom', '25px');
            
        
                    

});


