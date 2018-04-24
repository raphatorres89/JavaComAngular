package com.javacomangular.jaxrs;

import javax.ws.rs.GET;
import javax.ws.rs.Path;

@Path("/exemplowsrs")
public class Exemplo {

	@GET
	public String listar() {
		return "Raphael executou um GET";
	}
	
}
