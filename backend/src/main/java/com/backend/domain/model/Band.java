package com.backend.domain.model;

import javax.persistence.*;

import lombok.*;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Entity
public class Band {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "owner")
    private Member bandOwner;

    @Column(nullable = false)
    private String serialNumber;

    @Column(nullable = false)
    private String nickname;

    @Setter
    @Column(nullable = false)
    @Builder.Default
    private boolean cry = false;

    @Setter
    @Column(nullable = false)
    @Builder.Default
    private boolean flipped = false;
}
