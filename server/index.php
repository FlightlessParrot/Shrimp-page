<?
class mail
{

    protected $name;
    protected $mail;
    protected $tel;
    protected $message;
    function __construct()
    {
      
        $this->name = $this->sanitize($_POST['name']);
        $this->tel = $this->sanitize($_POST['tel']);
        $this->message = $this->sanitize($_POST['message']);
        $this->mail= $this->sanitizeMail($_POST['mail']);
    }
    function sanitize($string)
    {
        return filter_var($string, FILTER_SANITIZE_ADD_SLASHES);
    }

    function sanitizeMail($mail)
    {
        return filter_var($mail, FILTER_SANITIZE_EMAIL);
    }
    function sent($others)
    {
        $msg=$this->name.' '.$this->tel.' '.$this->message.' '.$others;
        mail('konrad.strauss.97@gmail.com', "Mail od " . $this->name, $msg, 'frome: ' . $this->mail);
    }
}

class offer extends mail
{
    private $sklep;
    private $money;
    private $panel;
    private $forum;
    function __construct()
    {
        
    }
}
?>
