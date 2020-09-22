package com.healthlog.emr;

import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;

import org.keycloak.KeycloakSecurityContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class LibraryController {

	private final HttpServletRequest httpRequest;
	
	@Autowired
	public LibraryController(HttpServletRequest httpRequest) {
		super();
		this.httpRequest = httpRequest;
	}
	
	@GetMapping(value="/")
	public String getHome() {
		return "index";
	}
	
	@GetMapping(value="/books")
	public String getBooks(Model model) {
		configCommonAttributes(model);
		
		model.addAttribute("books", new ArrayList<>());
		return "books";
	}
	
	/*
	 * @GetMapping(value="/error") public String getError(Model model) { return
	 * "403"; }
	 */
	
	@GetMapping(value="/manager")
	public String getManager(Model model) {
		configCommonAttributes(model);
		model.addAttribute("books", new ArrayList<>());
		return "manager";
	}
	
	@GetMapping(value="/logout")
	public String logout() throws ServletException {
		httpRequest.logout();
		return "redirect:/";
	}
	
	private void configCommonAttributes(Model model) {
		var a = getKeycloakSecurityContext();
		var token= a.getIdToken();
		var name = token.getGivenName();
		model.addAttribute("name", name);
	}
	
	/**
	 * The KeycloakSecurityContext provides access to several pieces of information
	 * contained in the security token, such as user profile information.
	 */
	private KeycloakSecurityContext getKeycloakSecurityContext() {
		return (KeycloakSecurityContext) httpRequest.getAttribute(KeycloakSecurityContext.class.getName());
	}
}