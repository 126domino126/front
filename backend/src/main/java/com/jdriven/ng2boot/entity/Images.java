package com.jdriven.ng2boot.entity;


import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

/**
 * A Images.
 */
@Entity
@Table(name = "image")
public class Images implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Lob
    @Column(name = "image_src")
    private String imageSrc;

//    @ManyToOne
//    private Long mark;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getImageSrc() {
        return imageSrc;
    }

    public Images imageSrc(String imageSrc) {
        this.imageSrc = imageSrc;
        return this;
    }

    public void setImageSrc(String imageSrc) {
        this.imageSrc = imageSrc;
    }

//    public Long getMark() {
//        return mark;
//    }
//
//    public Images mark(Long mark) {
//        this.mark = mark;
//        return this;
//    }
//
//    public void setMark(Long mark) {
//        this.mark = mark;
//    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Images images = (Images) o;
        if (images.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), images.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Images{" +
            "id=" + getId() +
            ", imageSrc='" + getImageSrc() + "'" +
            "}";
    }
}
