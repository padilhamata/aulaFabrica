package net.guides.springboot2.springboot2jpacrudexample;

import static org.junit.Assert.assertEquals;

import static org.junit.Assert.assertNotNull;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.client.HttpClientErrorException;

import net.guides.springboot2.springboot2jpacrudexample.model.Empregado;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = Application.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class TesteIntegracaoControleEmpregado {
	@Autowired
	private TestRestTemplate restTemplate;

	@LocalServerPort
	private int port;

	private String pegueUrl() {
		return "http://localhost:" + port;
	}

	@Test
	public void cargaContexto() {

	}

	@Test
	public void testePegueTodosEmpregados() {
		HttpHeaders headers = new HttpHeaders();
		HttpEntity<String> entity = new HttpEntity<String>(null, headers);

		ResponseEntity<String> response = restTemplate.exchange(pegueUrl() + "/empregados",
				HttpMethod.GET, entity, String.class);
		
		assertNotNull(response.getBody());
	}

	@Test
	public void testePegueEmpregadosPorId() {
		Empregado employee = restTemplate.getForObject(pegueUrl() + "/empregados/1", Empregado.class);
		System.out.println(employee.getnome());
		assertNotNull(employee);
	}

	@Test
	public void testCreateEmployee() {
		Empregado employee = new Empregado();
		employee.setidEmail("admin@gmail.com");
		employee.setnome("admin");
		employee.setnome("admin");

		ResponseEntity<Empregado> postResponse = restTemplate.postForEntity(pegueUrl() + "/empregados", employee, Empregado.class);
		assertNotNull(postResponse);
		assertNotNull(postResponse.getBody());
	}

	@Test
	public void testUpdateEmployee() {
		int id = 1;
		Empregado employee = restTemplate.getForObject(pegueUrl() + "/empregados/" + id, Empregado.class);
		employee.setnome("admin1");
		employee.setsobrenome("admin2");

		restTemplate.put(pegueUrl() + "/employees/" + id, employee);

		Empregado updatedEmployee = restTemplate.getForObject(pegueUrl() + "/empregados/" + id, Empregado.class);
		assertNotNull(updatedEmployee);
	}

	@Test
	public void testDeleteEmployee() {
		int id = 2;
		Empregado employee = restTemplate.getForObject(pegueUrl() + "/empregados/" + id, Empregado.class);
		assertNotNull(employee);

		restTemplate.delete(pegueUrl() + "/empregados/" + id);

		try {
			employee = restTemplate.getForObject(pegueUrl() + "/empregados/" + id, Empregado.class);
		} catch (final HttpClientErrorException e) {
			assertEquals(e.getStatusCode(), HttpStatus.NOT_FOUND);
		}
	}
}
