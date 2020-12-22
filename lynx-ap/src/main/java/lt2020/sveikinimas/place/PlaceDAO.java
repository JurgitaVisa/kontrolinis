package lt2020.sveikinimas.place;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface PlaceDAO extends JpaRepository<Place, Long> {

	@Query("select p from Place p where p.name like %?1%")
	List<Place> findByNameFragment(String name);

	@Query("select p from Place p order by p.name asc")
	List<Place> findAll();

}
