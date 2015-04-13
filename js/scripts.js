$(function() {
    $('form#place-input').submit(function(event) {
        var given_Location = $('input#location').val();
        var given_Image = $('input#image').val();
        var given_Time_Of_Year = $('select#time-of-year').val();
        var given_Notes = $('textarea#notes').val();

        var newPlace = { location: given_Location,
                        image: given_Image,
                        time_of_year: given_Time_Of_Year,
                        notes: given_Notes
                        };

        $('input#location').val("");
        $('input#image').val("");
        $('select#time-of-year').val("");
        $('textarea#notes').val("");

        $('#result').append("<img src='"+ newPlace.image + "' alt='No Image'>");
        $('.location1').text(newPlace.location);
        $('.time_of_year1').text(newPlace.time_of_year);
        $('.notes1').text(newPlace.notes);
        $('img').click(function(){
            $('#onClick').show();



        });



        event.preventDefault();



    });
});
