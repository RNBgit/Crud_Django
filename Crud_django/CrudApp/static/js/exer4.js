$(document).ready(function(){
    if( document.getElementById("btnsave").value == "SAVE"){
    $('.form').submit(function(e){
        e.preventDefault();
        fname.value = '';
        lname.value = '';
        age.value = '';
        address.value = '';
        bday.value = '';
        
    });
}
});
$(document).ready(function(){
    var n =0;
    $(".btnsave").click(function(){

        if(click == null){
        var firstname = $("input[name ='fname']").val();
        var lastname = $("input[name ='lname']").val();
        var address = $("input[name ='address']").val();
        var age = $("input[name ='age']").val();
        var birthday = $("input[name ='bdate']").val();
        var name = firstname+" "+lastname

        var fname_length = firstname.length;
        var lname_length = lastname.length;
        var addr_length = address.length;
        var age_length = age.length;
        var bday_length = birthday.length;

        if(lname_length > 0 && fname_length > 0 && addr_length > 0 && age_length > 0 && bday_length > 0){
            n +=1;
            $("table tr").last().after(
                '<tr data-n = '+n+' data-age = '+age+' data-name = '+name+' data-address = '+address+' data-bday = '+birthday+'> '+
                '<td>'+n+'</td>'+
                '<td>'+name+'</td>'+
                '<td>'+address+'</td>'+
                '<td>'+age+'</td>'+
                '<td>'+birthday+'</td>'+
                '<td><button type="button" id="btnedit">Edit</button><button type="button" id="btndelete">Delete</button></td>'+
            '</tr>'
            
            );
            alert("Saved");      
        }
        }
        else{
            $('#btnedit').prop('disabled', false);
            var firstname = $("input[name ='fname']").val();
            var lastname = $("input[name ='lname']").val();
            var address = $("input[name ='address']").val();
            var age = $("input[name ='age']").val();
            var birthday = $("input[name ='bdate']").val();
            var name = firstname+" "+lastname
        
            $(click).parents('tr').find('td:eq(2)').text(address);
            $(click).parents('tr').find('td:eq(1)').text(name);
            $(click).parents('tr').find('td:eq(3)').text(age);
            $(click).parents('tr').find('td:eq(4)').text(birthday);
            click = null;
            alert("Updated");
        }
        
        form.reset();
         
    })
    $(".update").click(function(){
        
        $('#btnedit').prop('disabled', false);
        var firstname = $("input[name ='fname']").val();
        var lastname = $("input[name ='lname']").val();
        var address = $("input[name ='address']").val();
        var age = $("input[name ='age']").val();
        var birthday = $("input[name ='bdate']").val();
        var name = firstname+" "+lastname
     
        $(click).parents('tr').find('td:eq(2)').text(address);
        $(click).parents('tr').find('td:eq(1)').text(name);
        $(click).parents('tr').find('td:eq(3)').text(age);
        $(click).parents('tr').find('td:eq(4)').text(birthday);
        alert("Updated");
                
    })

    $("table").on("click", "#btndelete", function(){
        $(this).closest("tr").remove();
    });

    var click = null;

    $("table").on("click", "#btnedit", function(){

        $('#btnedit').prop('disabled', true);
        
        click = this;
        var age1 = $(this).parents('tr').find('td:eq(3)').html();  
        var addr1 = $(this).parents('tr').find('td:eq(2)').html();  
        var name1 = $(this).parents('tr').find('td:eq(1)').html();  
        var bday1 = $(this).parents('tr').attr('data-bday');

        var temp = name1.split(" ")
        var fn = temp[0];
        var ln = temp[1];
         
        fname.value = fn;
        lname.value = ln;
        address.value = addr1;
        age.value = age1;
        bday.value = bday1;
        
    });    
})

