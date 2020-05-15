package ru.cmr.demo.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ru.cmr.demo.entity.Message;

@RestController	
@RequestMapping("/messages")
public class MessageController {
	//TODO: Domain objects and http method to get them out
	List<Message> messagesList = new ArrayList<Message>(){{
		add(new Message("Hello"));
		add(new Message("World"));
		add(new Message("One more"));
		add(new Message("Spring"));
		add(new Message("Java"));
	}};
	
	@GetMapping
	public List<Message> getList(){
		return messagesList;
	}
	
	@PostMapping
	public Message postMessage(@RequestBody Message msg) {
		messagesList.add(msg);
		return msg;
	}
	
}
