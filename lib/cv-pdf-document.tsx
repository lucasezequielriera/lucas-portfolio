import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";
import type { ParsedCv } from "@/lib/cv-generator";

const styles = StyleSheet.create({
  page: {
    paddingTop: 34,
    paddingBottom: 34,
    paddingHorizontal: 34,
    fontSize: 10.5,
    color: "#0F172A",
    fontFamily: "Helvetica",
    lineHeight: 1.45,
  },
  headerWrap: {
    marginBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#CBD5E1",
    paddingBottom: 10,
  },
  name: {
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
    color: "#0B1220",
    letterSpacing: 0.2,
  },
  contactRow: {
    marginTop: 6,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  contactText: {
    fontSize: 9.5,
    color: "#334155",
  },
  section: {
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 11,
    color: "#0B1220",
    fontFamily: "Helvetica-Bold",
    textTransform: "uppercase",
    letterSpacing: 0.6,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
    paddingBottom: 3,
  },
  bodyText: {
    fontSize: 10,
    color: "#1E293B",
  },
  bulletRow: {
    display: "flex",
    flexDirection: "row",
    gap: 6,
    marginBottom: 3,
    paddingRight: 4,
  },
  bulletDot: {
    fontSize: 10,
    color: "#0EA5E9",
    marginTop: -1,
  },
  bulletText: {
    fontSize: 10,
    color: "#1E293B",
    flex: 1,
  },
  skillsWrap: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
  },
  skillBadge: {
    fontSize: 9,
    color: "#0F172A",
    backgroundColor: "#E2E8F0",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 999,
  },
});

function BulletList({ items }: { items: string[] }) {
  return (
    <View>
      {items.map((item) => (
        <View key={item} style={styles.bulletRow}>
          <Text style={styles.bulletDot}>•</Text>
          <Text style={styles.bulletText}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

export function CvPdfDocument({ cv }: { cv: ParsedCv }) {
  return (
    <Document
      title={`${cv.name} - ATS Resume`}
      author={cv.name}
      subject="ATS-friendly resume"
      keywords={cv.skills.join(", ")}
    >
      <Page size="A4" style={styles.page}>
        <View style={styles.headerWrap}>
          <Text style={styles.name}>{cv.name}</Text>
          <View style={styles.contactRow}>
            {cv.email ? <Text style={styles.contactText}>{cv.email}</Text> : null}
            {cv.phone ? <Text style={styles.contactText}>{cv.phone}</Text> : null}
            {cv.location ? <Text style={styles.contactText}>{cv.location}</Text> : null}
            {cv.linkedin ? (
              <Link style={styles.contactText} src={cv.linkedin}>
                LinkedIn
              </Link>
            ) : null}
            {cv.github ? (
              <Link style={styles.contactText} src={cv.github}>
                GitHub
              </Link>
            ) : null}
            {cv.website ? (
              <Link style={styles.contactText} src={cv.website}>
                Portfolio
              </Link>
            ) : null}
          </View>
        </View>

        {cv.summary ? (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Professional Summary</Text>
            <Text style={styles.bodyText}>{cv.summary}</Text>
          </View>
        ) : null}

        {cv.skills.length ? (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Core Skills</Text>
            <View style={styles.skillsWrap}>
              {cv.skills.map((skill) => (
                <Text key={skill} style={styles.skillBadge}>
                  {skill}
                </Text>
              ))}
            </View>
          </View>
        ) : null}

        {cv.experience.length ? (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Experience</Text>
            <BulletList items={cv.experience} />
          </View>
        ) : null}

        {cv.projects.length ? (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Selected Projects</Text>
            <BulletList items={cv.projects} />
          </View>
        ) : null}

        {cv.education.length ? (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            <BulletList items={cv.education} />
          </View>
        ) : null}

        {cv.certifications.length ? (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Certifications</Text>
            <BulletList items={cv.certifications} />
          </View>
        ) : null}
      </Page>
    </Document>
  );
}
