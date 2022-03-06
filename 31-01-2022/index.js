var obj = {
    "first_name" : "Achyutha",
    "last_name" : "sri kashyap",
    "email" : "achyuthasrikashyapabiravapatla@gmail.com",
     "roll_no." : "06",
     "students" : [ 
	{
	  "name" : "krishna",
	  "marks" : 60
	},
	{
	  "name" : "ramu",
	  "marks" : 80
	},
	{
	  "name" : "vijay",
	  "marks" : 15
	},
	{
	  "name" : "mahesh",
	  "marks" : 50
	},
	{
	  "name" : "prabhas",
	  "marks" : 60
	},
	{
	  "name" : "akshay",
	  "marks" : 27
	},
	
        ]
}

var ip = prompt("Enter marks to check the list of student who scored equal to or above the given score.")
var ip = parseInt(ip)
var len = obj.students.length

for(var i = 0 ; i<len ; i++){
     var a = obj.students[i]
     var name = a.name
     var marks = a.marks
     if(ip<=marks){
         console.log("Name  : ",name,"\n")
         console.log("Marks : ",marks,"\n")
     }
}