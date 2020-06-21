package net.guides.springboot2.springboot2jpacrudexample.controller;

import java.util.HashMap;

import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.guides.springboot2.springboot2jpacrudexample.exception.RecursoExcecaoNaoEncontrado;
import net.guides.springboot2.springboot2jpacrudexample.model.Empregado;
import net.guides.springboot2.springboot2jpacrudexample.repository.RepositorioEmpregado;

@CrossOrigin
@RestController
@RequestMapping("/api/v1")
public class ControleEmpregado {
	@Autowired
	private RepositorioEmpregado repositorioEmpregado;

	@GetMapping("/empregado")
	public List<Empregado> getAllEmployees() {
		return repositorioEmpregado.findAll();
	}

	
	@GetMapping("/empregado/{id}")
	public ResponseEntity<Empregado> getEmployeeById(@PathVariable(value = "id") Long idEmpregado)
			throws RecursoExcecaoNaoEncontrado {
		Empregado empregado = repositorioEmpregado.findById(idEmpregado)
				.orElseThrow(() -> new RecursoExcecaoNaoEncontrado("Empregado não encontrado para este id: " + idEmpregado));
		return ResponseEntity.ok().body(empregado);
	}

	@PostMapping("/empregado")
	public Empregado criarEmpregado(@Valid @RequestBody Empregado empregado) {
		return repositorioEmpregado.save(empregado);
	}

	@PutMapping("/empregados/{id}")
	public ResponseEntity<Empregado> atualizarEmpregado(@PathVariable(value = "id") Long idEmpregado,
			@Valid @RequestBody Empregado employeeDetails) throws RecursoExcecaoNaoEncontrado {
		Empregado empregado = repositorioEmpregado.findById(idEmpregado)
				.orElseThrow(() -> new RecursoExcecaoNaoEncontrado("Empregado não encontrado para este id: " + idEmpregado));

		empregado.setidEmail(employeeDetails.getidEmail());
		empregado.setsobrenome(employeeDetails.getsobrenome());
		empregado.setnome(employeeDetails.getnome());
		final Empregado atualizarEmpregado = repositorioEmpregado.save(empregado);
		return ResponseEntity.ok(atualizarEmpregado);
	}
	

	@DeleteMapping("/empregado/{id}")
	public Map<String, Boolean> deleteEmployee(@PathVariable(value = "id") Long idEmpregado)
			throws RecursoExcecaoNaoEncontrado {
		Empregado empregado = repositorioEmpregado.findById(idEmpregado)
				.orElseThrow(() -> new RecursoExcecaoNaoEncontrado("Empregado não encontrado para este id: " + idEmpregado));

		repositorioEmpregado.delete(empregado);
		Map<String, Boolean> response = new HashMap<>();
		response.put("Deletado", Boolean.TRUE);
		return response;
	}
}