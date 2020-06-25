package net.guides.springboot2.springboot2jpacrudexample.model;

import java.util.Date;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "empregado")
public class Empregado {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private String nome;
	private String endereco;
	private String telefone;
	private String email;
	private String cpf;
	private Date dataNascimento;
	private String Funcao;// Mudar posteriormente
	
	public Empregado() {
		
	}

	public Empregado(String nome, String endereco, String telefone, String email, String cpf, Date dataNascimento,
			String funcao) {
		super();
		this.nome = nome;
		this.endereco = endereco;
		this.telefone = telefone;
		this.email = email;
		this.cpf = cpf;
		this.dataNascimento = dataNascimento;
		Funcao = funcao;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEndereco() {
		return endereco;
	}

	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public Date getDataNascimento() {
		return dataNascimento;
	}

	public void setDataNascimento(Date dataNascimento) {
		this.dataNascimento = dataNascimento;
	}

	public String getFuncao() {
		return Funcao;
	}

	public void setFuncao(String funcao) {
		Funcao = funcao;
	}

	
	
	
}
