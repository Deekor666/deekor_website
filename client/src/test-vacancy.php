<?php

interface iCart
{
    public function calcVat();

    public function notify();

    public function makeOrder($discount = 1.0);
}

class Cart implements iCart
//TODO � ����������� �� ��������� �������� �������, ������� ������������
//TODO ������� �������� ���������
{
    public $items;
    public $order;

    const VAT = 0.18;

    public function calcVat()
    {
        $vat = 0;
        foreach ($this->items as $item) {
            $vat += $item->getPrice() * 0.18; // self::VAT
        }
        return $vat;
    }

    public function notify()
    {
        $this->sendMail();
    }

//TODO ������� ���������� $m $p � $ms ����������, ��� ������ ���������� ����
    public function sendMail()
    {

//TODO ����������� SimpleMailer
        $m = new SimpleMailer('cartuser', 'j049lj-01');
        $p = 0;
        foreach ($this->items as $item) {
            $p += $item->getPrice() * 1.18;
        }

//@TODO id() ����� ������� getId() ��������
        $ms = "<p> <b>" . $this->order->id() . "</b> " . $p . " .</p>";

        $m->sendToManagers($ms);
    }

    public function makeOrder($discount = 1.0)
    {
        $p = 0;
        foreach ($this->items as $item) {
            $p += $item->getPrice() * 1.18 * $discount;
        }

//@TODO ����������� ����� Order (�����������)
        $this->order = new Order($this->items, $p);
        $this->sendMail();
    }
}

//class Item {
//    public function getPrice() {
//        return 'price';
//    }
//}
//
//class Order {
//    public function __construct($a, $b)
//    {
//        echo $a, $b;
//    }
//    public function getId() {
//        return 'id';
//    }
//}
//
//class SimpleMailer {
//    public function sendToManagers($message) {
//        return $message;
//    }
//}