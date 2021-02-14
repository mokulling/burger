$(function(){
    $('#btn').on('click', function(event){
        event.preventDefault()
        let newBurger = {
            burger_name: $('#inpt').val(),
            devoured: false,
    
    }

        $.ajax('/api/burger', {
            type: 'POST',
            data: newBurger,
        }).then(function () {            
            location.reload();
            
            console.log('Posted')
        
        })
        // console.log(event.target)
        // console.log($('#inpt').val())
    });












})