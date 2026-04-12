$( function() {
  // Reuse the `wait` function from 4.2
        function wait(ms) {
            return new Promise((resolve) => setTimeout(resolve, ms));
        }
 
        function findMentor(){
            clearData();
            var $mentorName = $("#mentor-search-input").val();
            var semester = document.getElementById("semester");
            var semesterValue = semester.value;
            var semesterDisplay = semester.options[semester.selectedIndex].innerText;

            
            // Example: Fetch local CSV (place data.csv in the same folder as your HTML/JS file)
            fetchCsvAndConvert('dashboards/dashboard_' + semesterValue + '.csv').then(data => {
                processData(data, semesterDisplay);
            });
                   
        }
        function clearData(){
            $("#ohq").text("");
            $("#sessions").text("")
            $("#helped").text("")
            $("#average").text("")
            $("#most").text("");
            $("#size").text("");
            $("#gratitude").text("");

        }
        function processData(results, semester){
            var $mentorName = $("#mentor-search-input").val();
            console.log("mentor: ", $mentorName);
            var dataAsArray = results.split("\n");
            var datas = [];
            var found = false;
            console.log($mentorName)
            for (let i = 0; i < dataAsArray.length; i++){
                var row = dataAsArray[i].split(",");
                // console.log(row);
                if (row[1].toLowerCase() == $mentorName.toLowerCase() || row[2].toLowerCase() == $mentorName.toLowerCase()){
                    found = true;
                    var course_name = row[0];
                    var ohq = row[3];
                    var sessions = row[12];
                    var course_size = Number(row[4]);
                    var helped = Number(row[5]);
                    var avg = Number(row[7]);
                    var average_helped = Math.round((helped/course_size)*100, 2);
                    var most = Number(row[9]);
                    datas = [course_name, ohq, sessions, helped, average_helped, most, avg];
                }
                }
            if ($mentorName === ""){
                found = false;
            }
            if (!(found)){
                $("#mentor-name").text("That's not a mentor from " + semester + ". Please try again.");
            }
            else{
                $("#mentor-name").text("Hello " + $mentorName + "!");
                displayData(datas);
            }
        
    }

        async function displayData(datas){
            await wait(2000);
            $("#ohq").text("You've had quite a semester as a "+ datas[1]+ " for " + datas[0]);
            await wait(4000);
            $("#sessions").text("Over the course of " + datas[2] + " sessions")
            await wait(4000);
            $("#helped").text("you helped "+ datas[3]+ " students this semester,")
            await wait(4000);
            $("#average").text("that's "+ datas[4]+ " percent of the class!")
            await wait(4000);
            $("#most").text("At your busiest session, you helped a whopping "+ datas[5]+ " students! That's quite a lot!");
            await wait(4000);
            $("#size").text("Most weeks, you helped "+ datas[6]+ " students, wow!");
            await wait(4000);
            $("#gratitude").text("Just know, that we here at CLEAR HQ are really proud of you and super grateful! Keep up the hard work!!!");

        }

        async function fetchCsvAndConvert(url) {
            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error('Network response was not ok');
                
                const csvContent = await response.text();
                return csvContent;
            } catch (error) {
                console.error('Error fetching CSV:', error);
            }
            }

        document.querySelector('#mentor-search-input').addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                findMentor();
            }
        });
        
        document.querySelector('#search-button').addEventListener('click', function (e) {
            findMentor();
        })  
})
        
        