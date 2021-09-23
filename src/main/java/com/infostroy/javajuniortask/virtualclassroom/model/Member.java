package com.infostroy.javajuniortask.virtualclassroom.model;

import javax.persistence.*;

@Entity
@Table(name = "members")
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name", nullable = false, unique = true)
    private String name;

    @Column(name = "is_hand_raised", nullable = false)
    private boolean isHandRaised;

    public Member(String name, boolean isHandRaised) {
        this.name = name;
        this.isHandRaised = isHandRaised;
    }

    public Member(String name) {
        this.name = name;
    }

    public Member() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isHandRaised() {
        return isHandRaised;
    }

    public void setHandRaised(boolean handRaised) {
        isHandRaised = handRaised;
    }
}
