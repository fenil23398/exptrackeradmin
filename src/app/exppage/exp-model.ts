export class Spends
{
    constructor(public expense_id:number,public fk_user_email:string,public fk_scat_id:number,public expense_date:string,public expense_amt:number,public colour_name:string,public exp_note:string,public exp_month:number,public exp_year:number)
    {
        
    }
}