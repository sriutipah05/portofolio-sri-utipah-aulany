// Membuat elemen-elemen HTML dengan JavaScript
document.addEventListener('DOMContentLoaded', () => {
    // Membuat elemen header
    const header = document.createElement('header');
    header.style.background = 'linear-gradient(90deg, #ff6f61, #3498db)';
    header.style.color = 'white';
    header.style.padding = '40px 20px';
    header.style.textAlign = 'center';

    const h1Header = document.createElement('h1');
    h1Header.textContent = 'Sri Utipah Aulani';
    h1Header.style.fontSize = '3rem';
    h1Header.style.fontWeight = '700';

    const pHeader = document.createElement('p');
    pHeader.textContent = 'Mahasiswi Ilmu Komputer dari Universitas Yatsi Madani';
    pHeader.style.fontSize = '1.2rem';
    pHeader.style.marginTop = '10px';

    header.appendChild(h1Header);
    header.appendChild(pHeader);
    document.body.appendChild(header);

    // Membuat container utama
    const container = document.createElement('div');
    container.className = 'container';
    container.style.maxWidth = '1100px';
    container.style.margin = '30px auto';
    container.style.padding = '20px';
    container.style.background = 'white';
    container.style.borderRadius = '15px';
    container.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.1)';
    document.body.appendChild(container);

    // Fungsi untuk membuat bagian (section)
    const createSection = (titleText) => {
        const section = document.createElement('div');
        section.className = 'section';
        section.style.marginBottom = '40px';

        const h2 = document.createElement('h2');
        h2.textContent = titleText;
        h2.style.fontSize = '1.8rem';
        h2.style.background = 'linear-gradient(90deg, #ff6f61, #3498db)';
        h2.style.webkitBackgroundClip = 'text';
        h2.style.webkitTextFillColor = 'transparent';
        h2.style.marginBottom = '20px';
        h2.style.borderLeft = '5px solid #ff6f61';
        h2.style.paddingLeft = '10px';

        section.appendChild(h2);
        return section;
    };

    // Membuat profil
    const profileSection = createSection('About me');
    profileSection.className += ' profile';
    profileSection.style.textAlign = 'center';

    const profileImg = document.createElement('img');
    profileImg.src = 'images/foto_profil.jpg';
    profileImg.alt = 'Foto Profil';
    profileImg.style.width = '180px';
    profileImg.style.height = '180px';
    profileImg.style.borderRadius = '50%';
    profileImg.style.marginBottom = '20px';
    profileImg.style.border = '4px solid #ff6f61';

    const profileH1 = document.createElement('h1');
    profileH1.textContent = 'Hallo! Saya Sri Utipah Aulani';
    profileH1.style.fontSize = '2rem';
    profileH1.style.marginBottom = '10px';

    const profileP = document.createElement('p');
    profileP.textContent = 'Saya Mahasiswi Ilmu Komputer di Universitas Yatsi Madani. Saya tertarik pada pengembangan aplikasi, teknologi web, dan pemograman. Saya berkomitmen untuk terus belajar dan berkontribusi dalam pengembangan teknologi di masa depan dan saya selalu bersemangat untuk belajar hal baru, terutama yang berkaitan dengan Teknologi.';
    profileP.style.fontSize = '1.1rem';
    profileP.style.color = '#7f8c8d';

    profileSection.appendChild(profileImg);
    profileSection.appendChild(profileH1);
    profileSection.appendChild(profileP);
    container.appendChild(profileSection);

    // Membuat keterampilan
    const skillsSection = createSection('Keterampilan');
    const skillsList = document.createElement('ul');
    ['Pengembangan Web: HTML, CSS, JavaScript', 'Bahasa Pemograman: C++, Python', 'Database: MySQL, MongoDB', 'Microsoft Office: Excel, Word, Powerpoint'].forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        li.style.margin = '10px 0';
        li.style.paddingLeft = '20px';
        li.style.position = 'relative';

        const checkIcon = document.createElement('span');
        checkIcon.textContent = '✔';
        checkIcon.style.position = 'absolute';
        checkIcon.style.left = '0';
        checkIcon.style.color = '#ff6f61';
        checkIcon.style.fontSize = '1.2rem';
        li.insertBefore(checkIcon, li.firstChild);

        skillsList.appendChild(li);
    });
    skillsSection.appendChild(skillsList);
    container.appendChild(skillsSection);

    // Membuat kontak
    const contactSection = createSection('Kontak');
    contactSection.className += ' contact';
    contactSection.style.textAlign = 'center';
    contactSection.style.padding = '30px 0';
    contactSection.style.background = 'linear-gradient(90deg, #3498db, #ff6f61)';
    contactSection.style.color = 'white';
    contactSection.style.borderRadius = '15px';

    const emailP = document.createElement('p');
    emailP.textContent = 'Email: sriutifahaulani61@gmail.com';
    emailP.style.fontSize = '1.1rem';

    const phoneP = document.createElement('p');
    phoneP.textContent = 'Telepon: 085882699896';
    phoneP.style.fontSize = '1.1rem';

    const linkedInLink = document.createElement('a');
    linkedInLink.href = 'https://linkedin.com/in/sriutifah';
    linkedInLink.textContent = 'LinkedIn';
    linkedInLink.style.display = 'inline-block';
    linkedInLink.style.margin = '10px 10px';
    linkedInLink.style.padding = '10px 20px';
    linkedInLink.style.color = 'white';
    linkedInLink.style.background = 'linear-gradient(90deg, #ff6f61, #3498db)';
    linkedInLink.style.borderRadius = '5px';
    linkedInLink.style.fontWeight = '600';
    linkedInLink.style.transition = '0.3s';

    linkedInLink.addEventListener('mouseover', () => {
        linkedInLink.style.background = 'linear-gradient(90deg, #3498db, #ff6f61)';
    });
    linkedInLink.addEventListener('mouseout', () => {
        linkedInLink.style.background = 'linear-gradient(90deg, #ff6f61, #3498db)';
    });

    const githubLink = linkedInLink.cloneNode(false);
    githubLink.href = 'https://github.com/sriutifah';
    githubLink.textContent = 'GitHub';

    contactSection.appendChild(emailP);
    contactSection.appendChild(phoneP);
    contactSection.appendChild(linkedInLink);
    contactSection.appendChild(githubLink);
    container.appendChild(contactSection);

    // Membuat footer
    const footer = document.createElement('footer');
    footer.style.textAlign = 'center';
    footer.style.padding = '15px';
    footer.style.background = 'linear-gradient(90deg, #ff6f61, #3498db)';
    footer.style.color = 'white';
    footer.style.marginTop = '20px';

    footer.textContent = '\u00A9 2024 Sri Utipah Aulani. All rights reserved.';
    document.body.appendChild(footer);
});
