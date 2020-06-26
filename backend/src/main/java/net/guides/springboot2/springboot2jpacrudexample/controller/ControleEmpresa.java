package net.guides.springboot2.springboot2jpacrudexample.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

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
import net.guides.springboot2.springboot2jpacrudexample.model.Empresa;
import net.guides.springboot2.springboot2jpacrudexample.repository.RepositorioEmpregado;
import net.guides.springboot2.springboot2jpacrudexample.repository.RepositorioEmpresa;

@CrossOrigin
@RestController
@RequestMapping("/api/v1")
public class ControleEmpresa {
	@Autowired
	private RepositorioEmpresa repositorioEmpresa;
	@Autowired
	ControleEmpregado controleEmpregado= new ControleEmpregado();

	@GetMapping("/empresas")
	public List<Empresa> getAllEmployees() {
		return repositorioEmpresa.findAll();
	}

	
	@GetMapping("/empresas/{id}")
	public ResponseEntity<Empresa> getEmployeeById(@PathVariable(value = "id") Long idEmpresa)
			throws RecursoExcecaoNaoEncontrado {
		Empresa empresa= repositorioEmpresa.findById(idEmpresa)
				.orElseThrow(() -> new RecursoExcecaoNaoEncontrado("Empregado não encontrado para este id: " + idEmpresa));
		return ResponseEntity.ok().body(empresa);
	}

	@PostMapping("/empresas/adicionaempregado{id}")
	public Empresa adicionaEmpregado(@PathVariable(value = "id") Long id, @RequestBody Empresa empresa) throws RecursoExcecaoNaoEncontrado {
	Empregado empregado = controleEmpregado.getEmpregadoById(idEmpresa);
	empresa.setProprietario(empregado);
		
		return repositorioEmpresa.save(empresa);
	}	
	@PostMapping("/empresas/{id}")
	public Empresa criarEmpregado(@PathVariable(value = "id") Long idEmpresa, @Valid @RequestBody Empresa empresa) throws RecursoExcecaoNaoEncontrado {
	Empregado empregado = controleEmpregado.getEmpregadoById(idEmpresa);
	empresa.setProprietario(empregado);
		
		return repositorioEmpresa.save(empresa);
	}

	@PutMapping("/empresas/{id}")
	public ResponseEntity<Empresa> atualizarEmpresa(@PathVariable(value = "id") Long idEmpresa, @Valid @RequestBody Empresa empresaDetalhes) throws RecursoExcecaoNaoEncontrado {
		Empresa empresa= repositorioEmpresa.findById(idEmpresa).orElseThrow(() -> new RecursoExcecaoNaoEncontrado("Empresa não encontrado para este id: " + idEmpresa));
		empresa.setNome(empresaDetalhes.getNome());
		empresa.setCNPJ(empresaDetalhes.getCNPJ());
		empresa.setTelefone(empresaDetalhes.getTelefone());
		empresa.setEndereco(empresaDetalhes.getEndereco());
		empresa.setDataFundacao(empresaDetalhes.getDataFundacao());
		//empresa.setProprietario(empresaDetalhes.getProprietario());
		
		
		
		final Empresa atualizarEmpresa = repositorioEmpresa.save(empresa);
		return ResponseEntity.ok(atualizarEmpresa);
	}
	

	@DeleteMapping("/empresas/{id}")
	public Map<String, Boolean> deleteEmployee(@PathVariable(value = "id") Long idEmpresa)
			throws RecursoExcecaoNaoEncontrado {
		Empresa empresa= repositorioEmpresa.findById(idEmpresa)
				.orElseThrow(() -> new RecursoExcecaoNaoEncontrado("Empregado não encontrado para este id: " + idEmpresa));

		repositorioEmpresa.delete(empresa);
		Map<String, Boolean> response = new HashMap<>();
		response.put("Deletado", Boolean.TRUE);
		return response;
	}
}
