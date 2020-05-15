package ru.cmr.demo.entity;

import javax.annotation.Generated;

public class Message {
	
	static private long id_counter = 0;
	private Long Id;
	private String text;
	
	
	
	public Message(String text) {
		super();
		this.text = text;
		this.Id = id_counter++;
	}
	
	public Message(Long Id,String text) {
		super();
		this.text = text;
		this.Id = id_counter++;
	}
	
	public Long getId() {
		return Id;
	}
	public void setId(Long id) {
		Id = id;
	}
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	
	

}
