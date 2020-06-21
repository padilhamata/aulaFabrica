package net.guides.springboot2.springboot2jpacrudexample.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "empregado")
public class Empregado {

	private long id;
	private String nome;
	private String sobrenome;
	private String idEmail;
	
	public Empregado() {
		
	}
	
	public Empregado(String nome, String sobrenome, String idEmail) {
		this.nome = nome;
		this.sobrenome = sobrenome;
		this.idEmail = idEmail;
	}
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	
	@Column(name = "Nome", nullable = false)
	public String getnome() {
		return nome;
	}
	public void setnome(String nome) {
		
		this.nome = nome;
	}
	
	@Column(name = "sobrenome", nullable = false)
	public String getsobrenome() {
		return sobrenome;
	}
	public void setsobrenome(String sobrenome) {
		this.sobrenome = sobrenome;
	}
	
	@Column(name = "email", nullable = false)
	public String getidEmail() {
		return idEmail;
	}
	public void setidEmail(String idEmail) {
		this.idEmail = idEmail;
	}

	@Override
	public String toString() {
		return "Empregado [id=" + id + ", nome=" + nome + ", sobrenome=" + sobrenome + ", idEmail=" + idEmail 
				+ "]";
	}

}
