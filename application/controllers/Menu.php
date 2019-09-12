<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Weixin Authentication
 */
class Menu extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */
	
	public function setMenu()
	{
		$this->load->library('Wechat/wechat_menu', self::getWconfig());
		var_dump($this->wechat_menu->getUserList());
	}	

	/**
	 * [create description]
	 * @author   jingfeiMac  794783766@qq.com
	 * @datetime 2019-09-12T20:04:47+0800
	 * @return   [type]                   [description]
	 */
	public function create()
	{	
		
		$data = array( 
			'button' => 
						array(
							'type' => 'click',
							'name' => '菜单',
							'sub_button'  => 
											array(
												'type' => 'click',
												'name' => 'BIAOPIZZA',
												'key'  => 'news',
												'sub_button' => [],
											),
											array(
												'type' => 'view',
												'name' => '获取设备二维码地址',
												'key'  => 'news',
												'sub_button' => [],
											),
											array(
												'type' => 'view',
												'name' => '其他通知',
												'url'  => 'http:\/\/mp.weixin.qq.com\/s?__biz=MzI2MDI4NzQ4NA==&mid=2247483654&idx=1&sn=571ff09b182d25b03851fbb4c6456094&scene=18#rd',
												'sub_button' => [],
											),
						),
						array(
							'type' => 'click',
							'name' => '备忘',
							'sub_button'  => 
											array(
												'type' => 'view',
												'name' => 'h5',
												'url'  => 'http:\/\/h5.eqxiu.com\/s\/pwIOcdKA',
												'sub_button' => [],
											),
											array(
												'type' => 'click',
												'name' => '图文',
												'key'  => 'news',
												'sub_button' => [],
											),
											array(
												'type' => 'miniprogram',
												'name' => 'wxa',
												'url'  => 'http://mp.weixin.qq.com',
												'appid'=> 'wx286b93c14bbf93aa',
												'pagepath' => 'pages/lunar/index',
											),
						),
						array(
							'type' => 'click',
							'name' => '关于',
							'sub_button'  => 
											array(
												'type' => 'click',
												'name' => '博客',
												'url'  => 'http://blog.kevinfei.com',
												'sub_button' => [],
											),
											array(
												'type' => 'click',
												'name' => '联系我们',
												'key'  => 'About',
												'sub_button' => [],
											),
						),
		);

		$this->load->library('Wechat/wechat_menu', self::getWconfig());
		var_dump($this->wechat_menu->createMenu($data));
	}

	/**
	 * [get description]
	 * @author   jingfeiMac  794783766@qq.com
	 * @datetime 2019-09-12T20:05:31+0800
	 * @return   [type]                   [description]
	 */
	public function get()
	{
		$this->load->library('Wechat/wechat_menu', self::getWconfig());
		var_dump($this->wechat_menu->getMenu());

	}

	/**
	 * [delete description]
	 * @author   jingfeiMac  794783766@qq.com
	 * @datetime 2019-09-12T20:05:36+0800
	 * @return   [type]                   [description]
	 */
	public function delete()
	{}

}