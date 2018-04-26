export class Reminder
{
    constructor(public rem_id:number,public fk_user_email:string,public rem_date:string,public rem_title:string,public rem_desc:string)
    {

    }
}