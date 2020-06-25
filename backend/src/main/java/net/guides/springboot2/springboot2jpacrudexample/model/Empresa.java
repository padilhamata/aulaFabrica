package net.guides.springboot2.springboot2jpacrudexample.model;

import java.util.Date;
import java.util.Optional;

import javax.persistence.CascadeType;
import javax.persistence.Embeddable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Embeddable
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
	public Long idEmpregado;
	@OneToOne
	@JoinColumn
	public Empregado proprietario;
	
	public Empresa() {
		
	}

	public Empresa(String nome, String cNPJ, String telefone, String endereco, Date dataFundacao, Long idEmpregado,
			Empregado proprietario) {
		super();
		this.nome = nome;
		CNPJ = cNPJ;
		this.telefone = telefone;
		this.endereco = endereco;
		this.dataFundacao = dataFundacao;
		this.idEmpregado = idEmpregado;
		this.proprietario = proprietario;
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

	public Long getIdEmpregado() {
		return idEmpregado;
	}

	public void setIdEmpregado(Long idEmpregado) {
		this.idEmpregado = idEmpregado;
	}

	public Empregado getProprietario() {
		return proprietario;
	}

	public void setProprietario(Empregado proprietario) {
		this.proprietario = proprietario;
	}

		
}
