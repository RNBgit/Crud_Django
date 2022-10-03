$(document).ready(function(){
    let $row_id = 0;

    var Customer = {
        Init: function(config) {
            this.config = config;
            // console.log(config)
            this.BindEvents();
        },  
        BindEvents: function() {
            let $this = this.config;

                $this.btn_submit.on('click', this.Submit);
                $this.tbl_customer.on('click', '.btn-edit', this.Edit);
                $this.tbl_customer.on('click', '.btn-delete', this.Delete);

        },
        Delete: (e) => {
            let $self = Customer.config;
            let $tr = $self.tbl_customer.find('tr#'+e.target.getAttribute("data-rowid"));
            console.log($tr)

            $tr.remove();


        },
        Clear: () => {
            let $self = Customer.config;

                $self.fname.val('');
                $self.lname.val('');
                
        },
        Edit: (e) => {
            let $self = Customer.config;
            let $row_id = e.target.getAttribute('data-rowid');
            
            let $tr = $self.tbl_customer.find('tr#' + $row_id);
            let $td = $tr.find('td');

                $self.fname.val( $td.eq(0).html() )
                $self.lname.val( $td.eq(1).html() )

                $self.btn_submit.attr('data-rowid', $row_id);
                $self.btn_submit.attr('data-action', 'update');
            
        },  
        Submit: () => {
            let $self = Customer.config;
            
            $row_id +=1;

            if( $self.btn_submit.attr('data-action') == 'new' ) {
                if($self.fname.val() != "" && $self.lname.val() != ""){
                    $self.tbl_customer.append(`
                    <tr id="${ $row_id }">
                        <td>${ $self.fname.val() }</td>   
                        <td>${ $self.lname.val() }</td>   
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
                }else{
                    alert("Please Fill Up")
                }
                 
                            
            }
            if( $self.btn_submit.attr('data-action') == 'update' ) {
                let $tr = $self.tbl_customer.find('tr#' +  $self.btn_submit.attr('data-rowid'));
                let $td = $tr.find('td');

                    $td.eq(0).html( $self.fname.val() );
                    $td.eq(1).html($self.lname.val());

                    $self.btn_submit.attr("data-action", "new")
            }


            Customer.Clear()
        },

        
        
    }
    

    Customer.Init({
        fname : $('#fname')
        ,lname : $('#lname')
        ,btn_submit : $('#btn-submit')
        ,tbl_customer : $('#tbl-customer')
    }) 


})    
