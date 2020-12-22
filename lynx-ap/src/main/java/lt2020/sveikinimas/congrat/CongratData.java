package lt2020.sveikinimas.congrat;

import java.util.Date;

public class CongratData {

	private Long id;
	private String name;
	private String text;
	private String picture;
	private String person;
	private String audio;
	private String type;
	private Date date;

	public CongratData() {
		super();
	}

	public CongratData(Long id, String name, String text, String picture, String person, String audio, String type,
			Date date) {
		super();
		this.id = id;
		this.name = name;
		this.text = text;
		this.picture = picture;
		this.person = person;
		this.audio = audio;
		this.type = type;
		this.date = date;
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

}
