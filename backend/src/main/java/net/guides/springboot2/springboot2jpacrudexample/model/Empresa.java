package net.guides.springboot2.springboot2jpacrudexample.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "empresa")
public class Empresa {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public long id;
	public String nome;
	public String CNPJ;
	public String telefone;
	public String endereco;
	public Date dataFundacao;
	@ManyToOne
	public Empregado Proprietario;
	
	public Empresa() {
		
	}
	
	
	

	public Empresa(String nome, String cNPJ, String telefone, String endereco, Date dataFundacao,
			Empregado proprietario) {
		super();
		this.nome = nome;
		CNPJ = cNPJ;
		this.telefone = telefone;
		this.endereco = endereco;
		this.dataFundacao = dataFundacao;
		Proprietario = proprietario;
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

	public String getCNPJ() {
		return CNPJ;
	}

	public void setCNPJ(String cNPJ) {
		CNPJ = cNPJ;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public String getEndereco() {
		return endereco;
	}

	public void setEndereco(String endereco) {
		this.endereco = endereco;
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
