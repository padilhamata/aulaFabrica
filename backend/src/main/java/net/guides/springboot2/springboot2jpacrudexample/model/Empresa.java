package net.guides.springboot2.springboot2jpacrudexample.model;

import java.util.Date;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class Empresa {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public long id;
	public String Nome;
	public String CNPJ;
	public String Telefone;
	public String Endereco;
	public Date dataFundacao;
	public Empregado Proprietario;
	
	public Empresa() {
		
	}
	
	public Empresa(String nome, String cNPJ, String telefone, String endereco, Date dataFundacao,
			Empregado proprietario) {
		super();
		Nome = nome;
		CNPJ = cNPJ;
		Telefone = telefone;
		Endereco = endereco;
		this.dataFundacao = dataFundacao;
		Proprietario = proprietario;
	}


	public String getNome() {
		return Nome;
	}


	public void setNome(String nome) {
		Nome = nome;
	}


	public String getCNPJ() {
		return CNPJ;
	}


	public void setCNPJ(String cNPJ) {
		CNPJ = cNPJ;
	}


	public String getTelefone() {
		return Telefone;
	}


	public void setTelefone(String telefone) {
		Telefone = telefone;
	}


	public String getEndereco() {
		return Endereco;
	}


	public void setEndereco(String endereco) {
		Endereco = endereco;
	}


	public Date getDataFundacao() {
		return dataFundacao;
	}


	public void setDataFundacao(Date dataFundacao) {
		this.dataFundacao = dataFundacao;
	}


	public Empregado getProprietario() {
		return Proprietario;
	}


	public void setProprietario(Empregado proprietario) {
		Proprietario = proprietario;
	}
	
	
	
}
