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

    @Column(name = "is_hand_up", nullable = false)
    private boolean isHandsUp;

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

    public boolean isHandsUp() {
        return isHandsUp;
    }

    public void setHandsUp(boolean handsUp) {
        isHandsUp = handsUp;
    }
}
