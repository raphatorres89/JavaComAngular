package com.javacomangular.model.rest.facade;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.javacomangular.model.Professor;

@Path("/professores")
@Produces({MediaType.APPLICATION_JSON,
		MediaType.APPLICATION_XML})			// produzindo Json e XML
@Consumes(MediaType.APPLICATION_JSON)		// consumindo Json
public class ProfessoresFacade {

	static List<Professor> lista = new ArrayList<Professor>();
	
	static {
		lista.add(new Professor(1,"Raphael Torres", "rapha.oo.torres@gmail.com","5193344415"));
		lista.add(new Professor(2,"Fernanda Torres", "nanda.torres@gmail.com","5193213213"));
		lista.add(new Professor(3,"Leonardo Torres", "leocatorres@gmail.com","1192939299"));
		lista.add(new Professor(4,"Franciele Ferreira", "franciele.ferreira@gmail.com","5193655284"));
	}
	
	@GET
	public List<Professor> listar() {
		return lista;
	}
}
