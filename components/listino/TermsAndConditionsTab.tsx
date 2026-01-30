"use client";

import React from "react";

export function TermsAndConditionsTab() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Condizioni Fiscali e di Trasporto
        </h2>
        <p className="subtitle-muted text-gray-600">
          Condizioni generali che disciplinano i rapporti tra SPST e l'Utente/Cliente
        </p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 sm:p-8 text-gray-900 space-y-6">
        {/* 1. Oggetto */}
        <section>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">1. Oggetto</h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Le presenti condizioni disciplinano i rapporti tra SPST S.r.l. (di seguito "SPST") e l'Utente/Cliente in relazione alle operazioni di intermediazione per servizi di trasporto, logistica, sdoganamento e consulenza connessi alla movimentazione delle merci.
          </p>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mt-2">
            Esse costituiscono parte integrante e sostanziale delle condizioni economiche pubblicate nel listino SPST.
          </p>
        </section>

        {/* 2. Tutela sulla Rappresentanza */}
        <section>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">2. Tutela sulla Rappresentanza</h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            SPST non assume in alcun caso funzione di rappresentante legale del Cliente o dei Fornitori di servizi, salvo diverso accordo espresso.
          </p>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mt-2">
            Ogni incarico esplicito di rappresentanza, delega o procura risulta accettato formalmente da SPST al momento dell'inoltro della richiesta tramite la piattaforma.
          </p>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mt-2">
            Tale accettazione è limitata alle sole attività strettamente necessarie all'esecuzione del servizio richiesto e non implica assunzione di responsabilità ulteriore rispetto al ruolo di intermediario.
          </p>
        </section>

        {/* 3. Correttezza e Veridicità dei Dati Documentali */}
        <section>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">3. Correttezza e Veridicità dei Dati Documentali</h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Il Cliente è l'unico responsabile della correttezza, completezza, veridicità e conformità dei dati forniti, inclusi a titolo esemplificativo ma non esaustivo:
          </p>
          <ul className="list-disc list-inside mt-3 space-y-1 text-sm sm:text-base text-gray-700 ml-4">
            <li>descrizione della merce;</li>
            <li>peso, volume e quantità;</li>
            <li>valore dichiarato;</li>
            <li>codici doganali (TARIC / NC);</li>
            <li>dati fiscali e anagrafici;</li>
            <li>documentazione doganale e commerciale.</li>
          </ul>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mt-3">
            SPST non potrà essere ritenuta responsabile per ritardi, blocchi, sanzioni, costi aggiuntivi o contestazioni derivanti da informazioni errate, incomplete o non conformi fornite dal Cliente.
          </p>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mt-2">
            Eventuali oneri, sanzioni o conseguenze saranno integralmente a carico del Cliente.
          </p>
        </section>

        {/* 4. SPST come Intermediario */}
        <section>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">4. SPST come Intermediario</h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            SPST opera esclusivamente in qualità di intermediario logistico e documentale tra il Cliente e i soggetti terzi incaricati dell'esecuzione del trasporto (vettori, corrieri, spedizionieri, magazzini, operatori doganali).
          </p>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mt-2">
            L'esecuzione materiale dei servizi è demandata a fornitori terzi selezionati in base alle migliori condizioni operative disponibili.
          </p>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mt-2">
            SPST non risponde di:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-sm sm:text-base text-gray-700 ml-4">
            <li>ritardi di consegna;</li>
            <li>danni, furti o perdite della merce;</li>
            <li>scioperi, fermi operativi o limitazioni dei vettori;</li>
            <li>condizioni contrattuali applicate dai soggetti terzi.</li>
          </ul>
        </section>

        {/* 5. Peso Volumetrico e Rilevazioni */}
        <section>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">5. Peso Volumetrico e Rilevazioni</h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            I costi di trasporto vengono calcolati sulla base del peso reale o del peso volumetrico, applicando il maggiore tra i due secondo i criteri del vettore incaricato.
          </p>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mt-2">
            Il Cliente accetta che:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-sm sm:text-base text-gray-700 ml-4">
            <li>il peso fatturato possa differire da quello dichiarato;</li>
            <li>eventuali rettifiche effettuate dal vettore prevalgano sui dati inseriti in fase di richiesta;</li>
            <li>eventuali differenze di costo vengano successivamente addebitate o rimborsate.</li>
          </ul>
        </section>

        {/* 6. Costi Accessori e Supplementari */}
        <section>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">6. Costi Accessori e Supplementari</h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Oltre alle tariffe di base, potranno applicarsi costi accessori, quali:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-sm sm:text-base text-gray-700 ml-4">
            <li>fuel surcharge;</li>
            <li>supplementi territoriali o di destinazione;</li>
            <li>soste, attese, facchinaggio;</li>
            <li>terminal handling;</li>
            <li>costi di gestione documentale o doganale;</li>
            <li>costi di pesatura o verifiche.</li>
          </ul>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mt-3">
            Tali costi derivano da condizioni applicate dai fornitori terzi e verranno trasferiti al Cliente in modo trasparente.
          </p>
        </section>

        {/* 7. Adeguamenti Tariffari */}
        <section>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">7. Adeguamenti Tariffari</h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Le tariffe sono soggette a variazione in caso di:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-sm sm:text-base text-gray-700 ml-4">
            <li>modifiche dei listini dei vettori;</li>
            <li>variazione dei costi carburante;</li>
            <li>aggiornamenti normativi;</li>
            <li>variazioni di mercato o operative.</li>
          </ul>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mt-3">
            Gli adeguamenti saranno applicati alle operazioni successive alla variazione.
          </p>
        </section>

        {/* 8. Privacy e Trattamento dei Dati */}
        <section>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">8. Privacy e Trattamento dei Dati</h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            SPST tratta i dati personali e aziendali nel rispetto del Regolamento UE 2016/679 (GDPR).
          </p>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mt-2">
            I dati sono utilizzati esclusivamente per:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-sm sm:text-base text-gray-700 ml-4">
            <li>esecuzione dei servizi richiesti;</li>
            <li>adempimenti fiscali e doganali;</li>
            <li>comunicazioni operative;</li>
            <li>obblighi normativi.</li>
          </ul>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mt-3">
            I dati potranno essere condivisi con vettori, operatori logistici, autorità e partner strettamente coinvolti nell'erogazione del servizio.
          </p>
        </section>

        {/* 9. Consulenza Preventiva */}
        <section>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">9. Consulenza Preventiva</h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            SPST può fornire, su richiesta, attività di consulenza preventiva in ambito logistico, fiscale o documentale.
          </p>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mt-2">
            Tali informazioni hanno carattere indicativo e non sostituiscono pareri legali o fiscali vincolanti.
          </p>
        </section>

        {/* 10. Blocchi Doganali e Restrizioni */}
        <section>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">10. Blocchi Doganali e Restrizioni</h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Il Cliente prende atto che merci soggette a controlli doganali, accise, licenze o certificazioni possono essere oggetto di blocchi, ispezioni o ritardi.
          </p>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mt-2">
            SPST fornirà supporto operativo nella gestione delle pratiche, ma non garantisce tempi né esiti dei controlli.
          </p>
        </section>

        {/* 11. Foro Competente */}
        <section>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">11. Foro Competente</h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Per ogni controversia relativa alla validità, interpretazione o esecuzione delle presenti condizioni, sarà competente in via esclusiva il Foro di Avellino, salvo diversa disposizione inderogabile di legge.
          </p>
        </section>
      </div>
    </div>
  );
}
