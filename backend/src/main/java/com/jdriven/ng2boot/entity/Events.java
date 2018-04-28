package com.jdriven.ng2boot.entity;


import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.Objects;

/**
 * A Events.
 *
 */
@Entity
@Table(name = "events")
public class Events implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "color_prim")
    private String colorPrim;

    @Column(name = "color_sec")
    private String colorSec;

    @Column(name = "all_day")
    private Boolean allDay;

    @Column(name = "starting")
    public Date starting;

    public Long getRepeat() {
        return repeat;
    }

    public void setRepeat(Long repeat) {
        this.repeat = repeat;
    }

    @Column(name = "ending")
    private Date ending;

    @Column(name = "repeat")
    private Long repeat;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getColorPrim() {
        return colorPrim;
    }

    public void setColorPrim(String colorPrim) {
        this.colorPrim = colorPrim;
    }

    public String getColorSec() {
        return colorSec;
    }

    public void setColorSec(String colorSec) {
        this.colorSec = colorSec;
    }

    public Boolean getAllDay() {
        return allDay;
    }

    public void setAllDay(Boolean allDay) {
        this.allDay = allDay;
    }

    @Override
    public String toString() {
        return "Events{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", colorPrim='" + colorPrim + '\'' +
                ", colorSec='" + colorSec + '\'' +
                ", allDay=" + allDay +
                ", starting=" + starting +
                ", ending=" + ending +
                '}';
    }

    public Date getStarting() {
        return starting;
    }

    public void setStarting(Date starting) {
        this.starting = starting;
    }

    public Date getEnding() {
        return ending;
    }

    public void setEnding(Date ending) {
        this.ending = ending;
    }
}
