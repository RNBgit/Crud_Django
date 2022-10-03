$(document).ready(function(){
    let $row_id =  1
    var CustomerInfo = {
        Init: function(config) {
            this.config = config;
            this.BindEvents();
        },
        BindEvents: function() {
            let $this = this.config;
            $this.btn_save.on('click', this.Submit);
            $this.tbl_customer.on('click', '.btn-edit', this.Edit)
            $this.tbl_customer.on('click', '.btn-delete', this.Delete)
            
        },
        
        Delete: (e) => {
            let $self = CustomerInfo.config;
            let $tr = $self.tbl_customer.find('tr#' + e.target.getAttribute('data-rowid'))
            $tr.remove()
            $self.btn_save.attr('value', "SAVE")
            $self.form.trigger("reset");
        },

        Edit: (e) => {
            
            let $self = CustomerInfo.config;
            let $row_id = e.target.getAttribute('data-rowid');
            
            let $tr = $self.tbl_customer.find('tr#' + $row_id);
            let $td = $tr.find('td');

            let fl = $td.eq(1).text()
            let temp = fl.split(" ")
            let $fn = temp[0]
            let $ln = temp[1]

            $self.fname.val($fn)
            $self.lname.val($ln)
            $self.address.val( $td.eq(2).html() )
            $self.age.val( $td.eq(3).html() )
            $self.bday.val( $td.eq(4).html() )

            $self.btn_save.attr('value', "UPDATE")
            $self.btn_save.attr('data-rowid', $row_id)
        },


        Submit: () => {
            let $self = CustomerInfo.config;
            if($self.btn_save.attr("value") == "SAVE"){
                if($self.fname.val() != "" && $self.lname.val() != "" && $self.address.val() != "" && $self.age.val() != "" && $self.bday.val() != "" ){
                $self.tbl_customer.append(`
                    <tr id= "${$row_id}">
                        <td>${ $row_id }</td>
                        <td>${ $self.fname.val() } ${ $self.lname.val() }</td>
                        <td>${ $self.address.val() }</td>
                        <td>${ $self.age.val() }</td>
                        <td>${ $self.bday.val() }</td>
                        <td>
                            <button class="btn-edit btn btn-warning" data-rowid="${ $row_id }">
                                edit   
                            </button>   
                            <button class="btn-delete btn btn-danger" data-rowid="${ $row_id }"">
                                delete   
                            </button>                                
                        </td>
                    </tr>
                `);
                $row_id++;
                $self.form.trigger("reset");
                
            }
            else{
                alert("Fill Up all information needed")
            }
            
            }
            if($self.btn_save.attr("value") == "UPDATE"){
                let $tr = $self.tbl_customer.find('tr#' +  $self.btn_save.attr('data-rowid'));
                let $td = $tr.find('td');

                let $fn = $self.fname.val()
                let $ln = $self.lname.val()
                $td.eq(1).text($fn +" "+ $ln)
                $td.eq(2).text($self.address.val())
                $td.eq(3).text($self.age.val())
                $td.eq(4).text($self.bday.val())

                $self.btn_save.attr('value', "SAVE")
                
                $self.form.trigger("reset");
            }
            
            
        }
        
        
    }

    CustomerInfo.Init({
        fname: $('#fname'),
        lname: $('#lname'),
        address: $('#address'),
        age: $('#age'),
        bday: $('#bday'),
        tbl_customer: $('#tbl_customer'),
        btn_save: $('#btn-save'),
        btn_edit: $('.btn-edit'),
        btn_delete: $('.btn-delete'),
        form: $('.form')
        
    })
})