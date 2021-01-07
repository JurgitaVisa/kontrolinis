package lt2020.sveikinimas.place;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OrderBy;

import lt2020.sveikinimas.congrat.Congrat;

@Entity
public class Place {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String name;
	private String picture;
	private String address;

	@ManyToMany
	@OrderBy(value = "name asc")
	private Set<Congrat> congratulations;

	public Place() {
		super();
	}

	public Place(String name, String picture, String address) {
		super();
		this.name = name;
		this.picture = picture;
		this.address = address;

	}

	public void addInstitution(Congrat congratulation) {
		this.congratulations.add(congratulation);
		congratulation.addPlace(this);
	}

	public void removeCongratulation(Congrat congratulation) {
		congratulation.getPlaces().remove(this);
		this.congratulations.remove(congratulation);

	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPicture() {
		return picture;
	}

	public void setPicture(String picture) {
		this.picture = picture;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Set<Congrat> getCongratulations() {
		return congratulations;
	}

		

}
