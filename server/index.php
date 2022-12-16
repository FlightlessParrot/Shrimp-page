<?
header('Access-Control-Allow-Origin: http://localhost:3000');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
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
        $this->message = $this->sanitize($_POST['messager']);
       $this->mail= isset($_POST['mail']) ?  $this->sanitizeMail($_POST['mail']): 'client@client.com';
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
        $msg=$this->name.' '.$this->tel.' <br> '.$this->message.' <br> '.$others;
        echo $msg;
        mail('shrimpinweb@gmail.com', "Mail od ".$this->name, $msg, 'From: '.$this->mail);
    }
}

class offer extends mail
{
    private $mess;
    public $oth;
    function __construct()
    {    
        $this->oth='';
        $this->mess=array(
            array('ilość podstron ', $_POST['page'] ),
            array('sklep internetowy ', $_POST['sklep'] ),
            array('płatności internetowe ', $_POST['money']),
            array('panel administratora ', $_POST['panel']),
            array('forum ', $_POST['forum']),
            array('galeria ', $_POST['galeria']),
            array('formularz: ', $_POST['formularz'])
        );
     $this->prepareInfo();

    }
    private function prepareInfo()
    {
        foreach($this->mess as $value)
        {
            $this->oth.=$value[0].$value[1].'<br>';
        }
    }
  
}

echo implode(" ",$_POST);
if(isset($_POST['type']))
{
    
if($_POST['type']==='mail')
{
$mailMan=new mail;
$mailMan->sent('');
}
else{
    $mailMan=new offer;
    $mailMan->sent($mailMan->oth);
}}
echo 'I am working'
?>
