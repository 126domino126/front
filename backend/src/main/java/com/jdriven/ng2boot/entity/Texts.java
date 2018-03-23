package com.jdriven.ng2boot.entity;


import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

/**
 * A Texts.
 */
@Entity
@Table(name = "texts")
public class Texts implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "data")
    private String data;

    @Column(name = "calendar")
    private Boolean calendar;

    @ManyToOne
    private Mark mark;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getData() {
        return data;
    }

    public Texts data(String data) {
        this.data = data;
        return this;
    }

    public void setData(String data) {
        this.data = data;
    }

    public Boolean isCalendar() {
        return calendar;
    }

    public Texts calendar(Boolean calendar) {
        this.calendar = calendar;
        return this;
    }

    public void setCalendar(Boolean calendar) {
        this.calendar = calendar;
    }

    public Mark getMark() {
        return mark;
    }

    public Texts mark(Mark mark) {
        this.mark = mark;
        return this;
    }

    public void setMark(Mark mark) {
        this.mark = mark;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Texts texts = (Texts) o;
        if (texts.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), texts.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Texts{" +
            "id=" + getId() +
            ", data='" + getData() + "'" +
            ", calendar='" + isCalendar() + "'" +
            "}";
    }
}
