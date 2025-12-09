package br.com.une.lojavirtual.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.une.lojavirtual.backend.model.GeneroMusical;

@Repository
public interface GeneroRepository extends JpaRepository<GeneroMusical, Long> {
}