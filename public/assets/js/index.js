$(function(){
    $('#btn').on('click', function(event){
        event.preventDefault()
        let burger = {
            burger_name: $('#inpt').val(),
            devoured: true,
    
    }

        $.ajax('/api/burger', {
            type: 'POST',
            data: burger,
        }).then(
            
                console.log('Posted')
        
        )
        // console.log(event.target)
        // console.log($('#inpt').val())
    })










})