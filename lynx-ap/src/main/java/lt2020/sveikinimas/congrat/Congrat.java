package lt2020.sveikinimas.congrat;

import java.util.Date;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OrderBy;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lt2020.sveikinimas.place.Place;

@Entity
public class Congrat {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String name;
	private String text;
	private String picture;
	private String person;
	private String audio;
	private String type;

	@Temporal(TemporalType.TIMESTAMP)
	private Date date;

	// many to many ++add, remove, get List
	@ManyToMany
	@JoinTable(name = "CongratPlace", joinColumns = @JoinColumn(name = "Congrat_ID"), inverseJoinColumns = @JoinColumn(name = "Place_ID"))
	@OrderBy(value = "name asc")
	private Set<Place> places;

	public Congrat() {
		super();
	}

	public Congrat(String name, String text, String picture, String person, String audio, String type, Date date) {
		super();
		this.name = name;
		this.text = text;
		this.picture = picture;
		this.person = person;
		this.audio = audio;
		this.type = type;
		this.date = date;
	}

	public void addPlace(Place place) {
		this.places.add(place);
	}

	public void removePlace(Place place) {
		this.places.remove(place);
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

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public String getPicture() {
		return picture;
	}

	public void setPicture(String picture) {
		this.picture = picture;
	}

	public String getPerson() {
		return person;
	}

	public void setPerson(String person) {
		this.person = person;
	}

	public String getAudio() {
		return audio;
	}

	public void setAudio(String audio) {
		this.audio = audio;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public Set<Place> getPlaces() {
		return places;
	}

}
