package lt2020.sveikinimas.place;

public class PlaceData {

	private Long id;
	private String name;
	private String picture;
	private String address;

	public PlaceData() {
		super();
	}

	public PlaceData(Long id, String name, String picture, String address) {
		super();
		this.id = id;
		this.name = name;
		this.picture = picture;
		this.address = address;
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

}
