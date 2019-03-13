$(document).ready(function(){
    getHouse()


    function disPlayInfo(id){
        $.get("https://anapioficeandfire.com/api/houses/"+id, houseData);
        function houseData(data){
            $('.inner_content').html(`
                <p>Name: ${data.name}</p>
                <p>Words: ${data.words}</p>
                <p>Titles: ${data.titles}</p>
            `)
        };

    }

    function getHouse(){
        var values;
        $('#baratheon_id').click(function(){
            values = document.getElementById('bara').value;
            disPlayInfo(values)
        });
        $('#lannister_id').click(function(){
            values = document.getElementById('lann').value;
            disPlayInfo(values)
        });
        $('#stark_id').click(function(){
            values = document.getElementById('star').value;
            disPlayInfo(values)
        });
        $('#targaryen_id').click(function(){
            values = document.getElementById('targ').value;
            disPlayInfo(values)
        });
    }

    
});